﻿using System;
using System.Collections.Generic;

namespace CRUDCore
{
    public partial class AspNetUserClaims
    {
        public int Id { get; set; }
        public long UserId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }

        public AspNetUsers User { get; set; }
    }
}
