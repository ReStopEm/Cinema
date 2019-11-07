using System;
using System.Collections.Generic;

namespace CRUDCore
{
    public partial class Movie
    {
        public int Id { get; set; }
        public string Link { get; set; }
        public string LinksToTheTrailer { get; set; }
        public string Photo { get; set; }
        public string MovieDescription { get; set; }
        public long? Counter { get; set; }
    }
}
