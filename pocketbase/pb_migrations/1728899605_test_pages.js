/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pages");
  const record = new Record(collection, {
    "id": "fys4y77xmgqo0xj",
    "pathname": "/pocketbase/dynamic-pages",
    "title": "Meltdown with Pocketbase Dynamic Pages",
    "body": "The page in Pocketbase is saved as HTML, sent to Meltdown, and rendered via a tag like <code>&lt;div innerHTML=article.body&gt;</code>"
  });
  return dao.saveRecord(record);
}, (db) => {
  const record = dao.findRecordById("pages", "fys4y77xmgqo0xj");
  return dao.deleteRecord(record);
});
