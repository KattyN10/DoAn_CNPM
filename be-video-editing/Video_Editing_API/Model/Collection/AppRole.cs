
using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Video_Editing_API.Model.Collection
{
    public class AppRole : MongoIdentityRole<Guid>
    {
    }
}
