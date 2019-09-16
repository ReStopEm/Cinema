using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDCore.ViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Password { get; set; }
    }
}
