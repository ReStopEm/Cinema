using System;
using System.Collections.Generic;

namespace CRUDCore
{
    public partial class AspNetRoleClaims
    {
        public int Id { get; set; }
        public long RoleId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }

        public AspNetRoles Role { get; set; }
    }
}
