using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Video_Editing_API.Model;
using Video_Editing_API.Model.Collection;

namespace Video_Editing_API.Service.DbConnection
{
    public interface IDbClient
    {
        IMongoCollection<AppUser> GetUserCollection();
        IMongoCollection<Model.Collection.Category> GetCategoryCollection();
        IMongoCollection<Model.Collection.Tag> GetTagCollection();
    }
}
