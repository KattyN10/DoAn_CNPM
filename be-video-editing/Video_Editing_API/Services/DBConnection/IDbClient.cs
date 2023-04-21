using MongoDB.Driver;


namespace Video_Editing_API
{
    public interface IDbClient
    {
        IMongoCollection<AppUser> GetUserCollection();
    }
}
