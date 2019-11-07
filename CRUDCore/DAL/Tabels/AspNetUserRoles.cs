using System;
using System.Collections.Generic;

namespace CRUDCore
{
    public partial class AspNetUserRoles
    {
        public long UserId { get; set; }
        public long RoleId { get; set; }

        public AspNetRoles Role { get; set; }
        public AspNetUsers User { get; set; }
    }
}
