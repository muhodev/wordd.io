import mongoose from "mongoose";

const phraseSchema = new mongoose.Schema(
  {
    sentence: {
      en: {
        type: String,
      },
      tr: {
        type: String,
      },
    },
    definition: {
      type: String,
    },
    words: [
      {
        type: String,
      },
    ],
    grammar: [
      {
        topic: {
          type: mongoose.Types.ObjectId,
          ref: "GrammarTopic",
        },
        content: {
          type: String,
        },
      },
    ],
    tips: {
      type: String,
    },
    tag: {
      type: String,
    },
  },
  { timestamps: true }
);

const Phrase = mongoose.model("Phrase", phraseSchema);

export { Phrase };
