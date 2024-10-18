/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gwigqbevn82hufd",
    "created": "2024-10-13 12:02:22.170Z",
    "updated": "2024-10-13 12:02:22.170Z",
    "name": "pages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gmmor9q8",
        "name": "pathname",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^\\/"
        }
      },
      {
        "system": false,
        "id": "d3yukbsn",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "iygec3ok",
        "name": "body",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {},
    "indexes": [
      "CREATE UNIQUE INDEX `idx_yI1mUWy` ON `pages` (`pathname`)"
    ]
  });
  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gwigqbevn82hufd");
  return dao.deleteCollection(collection);
});
