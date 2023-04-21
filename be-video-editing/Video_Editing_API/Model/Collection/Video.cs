using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Video_Editing_API.Model.Collection
{
    public class Video
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string ID { get; set; }

        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string CatID { get; set; }

        public double Duration { get; set; }
        public string Name { get; set; }
        public BsonDateTime Datecreate { get; set; }
    }
}
