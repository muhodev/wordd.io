import { catchAsync, AppError } from "../@utils/index.js";
import { Phrase } from "../models/index.js";

export const getAllPhrases = catchAsync(async (req, res, next) => {
  const phrases = await Phrase.find({});
  res.status(200).json({
    status: "success",
    phrases,
  });
});

export const createOnePhrase = catchAsync(async (req, res, next) => {
  const body = req.body;

  const newPhrase = await Phrase.create(body);
  res.status(201).json({
    status: "success",
    phrase: newPhrase,
  });
});

export const deleteOnePhrase = catchAsync(async (req, res, next) => {
  const doc = await Phrase.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError("Böyle bir kayıt bulunamadı", 404));
  }

  res.status(204).json({
    status: "success",
    doc: null,
  });
});

export const updateOnePhrase = catchAsync(async (req, res, next) => {
  const doc = await Phrase.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError("Böyle bir kayıt bulunamadı", 404));
  }

  res.status(200).json({
    status: "success",
    doc,
  });
});

export const getOnePhrase = catchAsync(async (req, res, next) => {
  let query = Phrase.findOne({ slug: req.params.id });
  const doc = await query;

  if (!doc) {
    return next(new AppError("Böyle bir kayıt bulunamadı", 404));
  }

  res.status(200).json({
    status: "success",
    doc,
  });
});
