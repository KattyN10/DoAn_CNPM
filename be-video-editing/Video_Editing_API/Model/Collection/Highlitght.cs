﻿using MongoDB.Bson.Serialization.Attributes;

namespace Video_Editing_API.Model.Collection
{
    public class Highlitght
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string ID { get; set; }

        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string UserID { get; set; }

        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string VideoID { get; set; }

        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string ImageID { get; set; }

        public string Description { get; set; }
    }
}
