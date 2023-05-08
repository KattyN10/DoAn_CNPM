using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using video_editing_api.Model;
using video_editing_api.Model.Collection;

namespace video_editing_api.Service.DbConnection
{
    public class DbClient : IDbClient
    {
        private readonly IMongoCollection<AppUser> _user;
        private readonly IMongoCollection<Model.Collection.Category> _category;
        private readonly IMongoCollection<Model.Collection.Video> _video;

        public DbClient()
        {
            var client = new MongoClient("mongodb+srv://phucnguyen:26102002@cluster0.fh28jr0.mongodb.net/test");
            var database = client.GetDatabase("Video-Editing");

            _user = database.GetCollection<AppUser>("User");
            _category = database.GetCollection<Model.Collection.Category>("Category");
            _video = database.GetCollection<Model.Collection.Video>("Video");
        }

        public IMongoCollection<Model.Collection.Category> GetCategoryCollection()
        {
            return _category;
        }

        public IMongoCollection<AppUser> GetUserCollection()
        {
            return _user;
        }

        public IMongoCollection<Model.Collection.Video> GetVideoCollection()
        {
            return _video;
        }
    }
}
