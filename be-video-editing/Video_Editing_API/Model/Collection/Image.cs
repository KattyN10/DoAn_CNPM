using MongoDB.Bson.Serialization.Attributes;

namespace Video_Editing_API.Model.Collection
{
    public class Image
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string ID { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
    }
}
