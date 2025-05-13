import { getServerSession } from "@/action/auth.action";
import db from "@/lib/database/db";
import { FilterQuery } from "mongoose";
import { File } from "@/lib/database/schema/file.model";
import { Subscription } from "@/lib/database/schema/subscription.model";
import { pinata } from "@/lib/pinata/config";
import { getCategoryFromMimeType, parseError } from "@/lib/utils";
import { Hono } from "hono";

const fileRoute = new Hono();
const FILE_SIZE = 9;

fileRoute.get("/", async (c) => {
  try {
    await db();
    const session = await getServerSession();
    const search = c.req.query("search");

    if (!session) {
      return c.json({ message: "Unauthorized", description: "You need to be logged in to search files." }, { status: 401 });
    }

    if (!search || search.trim() === "") {
      return c.json({ message: "⚠️ Warning", description: "Search term is required." }, { status: 400 });
    }

    const { user: { id } } = session;

    const files = await File.find({
      "userInfo.id": id,
      name: { $regex: search, $options: "i" },
    }).lean();

    return c.json({ message: "Success", data: files }, { status: 200 });
  } catch (error) {
    const err = parseError(error);
    return c.json({ message: "Error", description: err, data: null }, { status: 500 });
  }
});

fileRoute.get("/:category", async (c) => {
  try {
    await db();
    const categoryParam = c.req.param("category");
    const page = Number(c.req.query("page")) || 1;
    const session = await getServerSession();

    if (!session) {
      return c.json({ message: "unauthorized", description: "You need to be logged in to view files" }, { status: 401 });
    }

    const { user: { id: userId, email: userEmail } } = session;

let query: FilterQuery<typeof File> = { "userInfo.id": userId };

    if (categoryParam === "shared") {
      query = { "sharedWith.email": userEmail };
    } else if (categoryParam !== "all") {
      query.category = categoryParam;
    }

    const totalFiles = await File.countDocuments(query);
    const files = await File.find(query)
      .skip((page - 1) * FILE_SIZE)
      .limit(FILE_SIZE)
      .sort({ createdAt: -1 })
      .lean();

    return c.json({
      message: "Success",
      data: {
        files,
        total: totalFiles,
        currentPage: page,
        totalPages: Math.ceil(totalFiles / FILE_SIZE),
      },
    }, { status: 200 });
  } catch (error) {
    const err = parseError(error);
    return c.json({ message: "Error", description: err, data: null }, { status: 500 });
  }
});

fileRoute.post("/upload", async (c) => {
  try {
    await db();
    const data = await c.req.formData();
    const file = data.get("file");
    const session = await getServerSession();

    if (!session) {
      return c.json({ message: "unauthorized", description: "You need to be logged in to upload files" }, { status: 401 });
    }

    const userId = session.user.id;
    const name = session.user.name;

    const subs = await Subscription.findOne({ subscriber: userId });
    if (!subs || subs.subscriptionType !== "free" || subs.status !== "activated") {
      return c.json({ message: "⚠️ Subscription issue", description: "Check your subscription status." }, { status: 401 });
    }

    if (subs.selectedStorage <= subs.usedStorage) {
      return c.json({ message: "⚠️ Warning", description: "Storage limit exceeded." }, { status: 400 });
    }
        const uploadData = await pinata.upload.public.file(file).keyvalues({
            userId,
            name,
        });
    const category = getCategoryFromMimeType(uploadData.mime_type);

    const uploadedFile = await File.create({
      pinataId: uploadData.id,
      name: uploadData.name,
      mimeType: uploadData.mime_type,
      cid: uploadData.cid,
      size: uploadData.size,
      userInfo: { id: userId, name },
      category,
    });

    await Subscription.updateOne({ subscriber: userId }, { $inc: { usedStorage: uploadData.size } });

    return c.json({ message: "✅ Upload Successful", category, file: uploadedFile }, { status: 200 });
  } catch (error) {
    const err = parseError(error);
    return c.json({ message: "❌ Error", description: err, file: null }, { status: 500 });
  }
});

export default fileRoute;
