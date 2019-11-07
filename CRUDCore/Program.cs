using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace CRUDCore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();

            using (CRUDCoreContext db = new CRUDCoreContext())
            {
              
                var users = db.AspNetUsers.ToList(); 
                Console.WriteLine("Список объектов:");
                foreach (AspNetUsers u in users)
                {
                    Console.WriteLine($"{u.Id}.{u.UserName} - {u.Email}");
                }
            }
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
