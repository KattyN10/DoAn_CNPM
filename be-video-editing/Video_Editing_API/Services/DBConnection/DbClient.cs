using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Video_Editing_API
{
    public class DbClient : IDbClient
    {
        private readonly IMongoCollection<AppUser> _user;
        public DbClient(IOptions<DBConfig> dbConfig)
        {
            var client = new MongoClient(dbConfig.Value.Connection_String);
            var database = client.GetDatabase(dbConfig.Value.Database_Name);
            _user = database.GetCollection<AppUser>(dbConfig.Value.User_Collection_Name);
        }

        public IMongoCollection<AppUser> GetUserCollection() => _user;
     
    }
}
