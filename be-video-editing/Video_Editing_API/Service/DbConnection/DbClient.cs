using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Video_Editing_API.Model;
using Video_Editing_API.Model.Collection;

namespace Video_Editing_API.Service.DbConnection
{
    public class DbClient : IDbClient
    {
        private readonly IMongoCollection<AppUser> _user;
        private readonly IMongoCollection<Model.Collection.Category> _category;
        private readonly IMongoCollection<Model.Collection.Tag> _tag;

        public DbClient()
        {
            var client = new MongoClient("mongodb+srv://phucnguyen:26102002@cluster0.fh28jr0.mongodb.net/test");
            var database = client.GetDatabase("Video-Editing");

            _user = database.GetCollection<AppUser>("User");
            _category = database.GetCollection<Model.Collection.Category>("Category");
            _tag = database.GetCollection<Model.Collection.Tag>("Tag");
        }

        public IMongoCollection<Model.Collection.Category> GetCategoryCollection()
        {
            return _category;
        }

        public IMongoCollection<Model.Collection.Tag> GetTagCollection()
        {
            return _tag;
        }

        public IMongoCollection<AppUser> GetUserCollection()
        {
            return _user;
        }

        
    }
}
