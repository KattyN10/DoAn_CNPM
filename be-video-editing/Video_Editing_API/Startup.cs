using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using video_editing_api.Service;
using video_editing_api.Service.Category;
using video_editing_api.Service.DbConnection;
using video_editing_api.Service.Tag;
using video_editing_api.Service.Video;

namespace video_editing_api
{
    public class Startup
    {
        private readonly string _myAllowSpecificOrigins = "AllowSpecficOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpClient();
            #region AddCors
            services.AddCors(options =>
            {
                options.AddPolicy(name: _myAllowSpecificOrigins,
                    builder =>
                    {
                        builder
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .SetIsOriginAllowed(origin => true) // allow any origin
                        .AllowCredentials()
                        .WithExposedHeaders("Content-Disposition");
                    });
            });
            #endregion

            services.AddSingleton<IDbClient, DbClient>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<ITagService, TagService>();
            services.AddScoped<IVideoService, VideoService>();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "video_editing_api", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors(_myAllowSpecificOrigins);
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "video_editing_api v1"));
            }
            app.UseAuthentication();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
