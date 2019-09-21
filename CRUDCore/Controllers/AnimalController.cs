using System;
using System.Collections.Generic;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CRUDCore.DAL.Entities;
using CRUDCore.Helpers;
using CRUDCore.ViewModel;
using CRUDCore.DAL.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CRUDCore.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AnimalController : ControllerBase
    {
        //static List<AnimalViewModel> data = new List<AnimalViewModel>
        //    {
        //        new AnimalViewModel {
        //            Id=4,
        //            Name="Верблую",
        //            Image="http://www.origins.org.ua/pictures/photo_verblud_3.jpg"
        //        },
        //        new AnimalViewModel {
        //            Id=7,
        //            Name="Білка",
        //            Image="https://ichef.bbci.co.uk/news/976/cpsprodpb/7624/production/_104444203_d03fb5eb-685c-42c3-8fa2-eea0ee2dac26.jpg"
        //        },
        //    };
        private readonly EFContext _context;
        private readonly IConfiguration _configuration;
        private readonly IHostingEnvironment _env;
        public AnimalController(EFContext context, IHostingEnvironment env,
            IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
            _env = env;
        }

        // GET api/animal/search
        [HttpGet("search")]
        public IActionResult Get()
        {
            Thread.Sleep(3000);
            List<AnimalViewModel> model = _context.Animals
                .Select(a => new AnimalViewModel
                {
                    Id = a.Id,
                    Name = a.Name,
                    Image = a.Image
                }).ToList();

            return Ok(model);
        }
        // POST api/animal/add
        [HttpPost("add")]
        public IActionResult Post([FromBody] AnimalAddViewModel model)
        {
            //Random rand = new Random();
            _context.Animals.Add(new DbAnimal
            {
                Name = model.Name,
                Image = model.Image
            });
            _context.SaveChanges();
            return Ok();
        }

        [HttpPost("add-base64")]
        public IActionResult AddBase64([FromBody] AnimalAddViewModel model)
        {
            string imageName = Guid.NewGuid().ToString() + ".jpg";
            string base64 = model.Image;
            if (base64.Contains(","))
            {
                base64 = base64.Split(',')[1];
            }

            var bmp = base64.FromBase64StringToImage();
            string fileDestDir = _env.ContentRootPath;
            fileDestDir = Path.Combine(fileDestDir, _configuration.GetValue<string>("ImagesPath"));

            string fileSave = Path.Combine(fileDestDir, imageName);
            if (bmp != null)
            {
                int size = 1200;
                var image = ImageHelper.CompressImage(bmp, size, size);
                image.Save(fileSave, ImageFormat.Jpeg);
            }
            //bmp.Save(fileSave);

            //Random rand = new Random();
            //_context.Animals.Add(new DbAnimal
            //{
            //    Name = model.Name,
            //    Image = model.Image
            //});
            //_context.SaveChanges();
            return Ok();
        }
    }
}