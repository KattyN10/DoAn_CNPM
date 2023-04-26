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
        public DbClient(IOptions<DbConfig> dbConfig)
        {
          
            var client = new MongoClient(dbConfig.Value.Connection_String);
            var database = client.GetDatabase(dbConfig.Value.Database_Name);
            _user = database.GetCollection<AppUser>(dbConfig.Value.User_Collection_Name);
        }

        public IMongoCollection<AppUser> GetUserCollection()
        {
            return _user;
        }

        
    }
}
