using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Video_Editing_API.Model;

namespace Video_Editing_API.Service.DbConnection
{
    public interface IDbClient
    {
        IMongoCollection<AppUser> GetUserCollection();
    }
}
