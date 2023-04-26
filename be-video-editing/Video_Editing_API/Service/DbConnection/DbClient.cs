using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Video_Editing_API.Model;

namespace Video_Editing_API.Service.DbConnection
{
    public class DbClient : IDbClient
    {
        private readonly IMongoCollection<AppUser> _user;

        public DbClient()
        {
            var client = new MongoClient("mongodb+srv://phucnguyen:26102002@cluster0.fh28jr0.mongodb.net/test");
            var database = client.GetDatabase("Video-Editing");
            _user = database.GetCollection<AppUser>("User");
        }

        public IMongoCollection<AppUser> GetUserCollection()
        {
            return _user;
        }

        
    }
}
