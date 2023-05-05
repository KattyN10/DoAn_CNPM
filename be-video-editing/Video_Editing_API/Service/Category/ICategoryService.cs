using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Video_Editing_API.Service.Category
{
    public interface ICategoryService
    {
        List<Model.Collection.Category> GetListCategory();
        //Video_Editing_API.Model.Collection.Category GetCategory(string Name);
        void AddCategory(Model.Collection.Category category);
        void UpdateCategory(Model.Collection.Category category);
        void RemoveCategory(string id);
    }
}
