using System;
using System.Collections.Generic;

namespace CRUDCore
{
    public partial class AspNetUserLogins
    {
        public string LoginProvider { get; set; }
        public string ProviderKey { get; set; }
        public string ProviderDisplayName { get; set; }
        public long UserId { get; set; }

        public AspNetUsers User { get; set; }
    }
}
