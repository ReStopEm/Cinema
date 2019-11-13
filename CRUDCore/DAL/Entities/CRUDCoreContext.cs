//using System;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Metadata;

//namespace CRUDCore
//{
//    public partial class CRUDCoreContext : DbContext
//    {
//        public CRUDCoreContext()
//        {
//        }

//        public CRUDCoreContext(DbContextOptions<CRUDCoreContext> options)
//            : base(options)
//        {
//        }

//        public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
//        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
//        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
//        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
//        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
//        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
//        public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
//        public virtual DbSet<Description> Description { get; set; }
//        public virtual DbSet<Movies> Movies { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=CRUDCore;Trusted_Connection=True;");
//            }
//        }

//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            modelBuilder.Entity<AspNetRoleClaims>(entity =>
//            {
//                entity.HasIndex(e => e.RoleId);

//                entity.HasOne(d => d.Role)
//                    .WithMany(p => p.AspNetRoleClaims)
//                    .HasForeignKey(d => d.RoleId);
//            });

//            modelBuilder.Entity<AspNetRoles>(entity =>
//            {
//                entity.HasIndex(e => e.NormalizedName)
//                    .HasName("RoleNameIndex")
//                    .IsUnique()
//                    .HasFilter("([NormalizedName] IS NOT NULL)");

//                entity.Property(e => e.Name).HasMaxLength(256);

//                entity.Property(e => e.NormalizedName).HasMaxLength(256);
//            });

//            modelBuilder.Entity<AspNetUserClaims>(entity =>
//            {
//                entity.HasIndex(e => e.UserId);

//                entity.HasOne(d => d.User)
//                    .WithMany(p => p.AspNetUserClaims)
//                    .HasForeignKey(d => d.UserId);
//            });

//            modelBuilder.Entity<AspNetUserLogins>(entity =>
//            {
//                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

//                entity.HasIndex(e => e.UserId);

//                entity.Property(e => e.LoginProvider).HasMaxLength(128);

//                entity.Property(e => e.ProviderKey).HasMaxLength(128);

//                entity.HasOne(d => d.User)
//                    .WithMany(p => p.AspNetUserLogins)
//                    .HasForeignKey(d => d.UserId);
//            });

//            modelBuilder.Entity<AspNetUserRoles>(entity =>
//            {
//                entity.HasKey(e => new { e.UserId, e.RoleId });

//                entity.HasIndex(e => e.RoleId);

//                entity.HasOne(d => d.Role)
//                    .WithMany(p => p.AspNetUserRoles)
//                    .HasForeignKey(d => d.RoleId);

//                entity.HasOne(d => d.User)
//                    .WithMany(p => p.AspNetUserRoles)
//                    .HasForeignKey(d => d.UserId);
//            });

//            modelBuilder.Entity<AspNetUsers>(entity =>
//            {
//                entity.HasIndex(e => e.NormalizedEmail)
//                    .HasName("EmailIndex");

//                entity.HasIndex(e => e.NormalizedUserName)
//                    .HasName("UserNameIndex")
//                    .IsUnique()
//                    .HasFilter("([NormalizedUserName] IS NOT NULL)");

//                entity.Property(e => e.Email).HasMaxLength(256);

//                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

//                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

//                entity.Property(e => e.UserName).HasMaxLength(256);
//            });

//            modelBuilder.Entity<AspNetUserTokens>(entity =>
//            {
//                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

//                entity.Property(e => e.LoginProvider).HasMaxLength(128);

//                entity.Property(e => e.Name).HasMaxLength(128);

//                entity.HasOne(d => d.User)
//                    .WithMany(p => p.AspNetUserTokens)
//                    .HasForeignKey(d => d.UserId);
//            });

//            modelBuilder.Entity<Description>(entity =>
//            {
//                entity.Property(e => e.Id)
//                    .HasColumnName("id")
//                    .ValueGeneratedNever();

//                entity.Property(e => e.Cast)
//                    .IsRequired()
//                    .HasColumnName("cast")
//                    .HasMaxLength(100);

//                entity.Property(e => e.Director)
//                    .IsRequired()
//                    .HasColumnName("director")
//                    .HasMaxLength(20);

//                entity.Property(e => e.Genre)
//                    .IsRequired()
//                    .HasColumnName("genre")
//                    .HasMaxLength(40);

//                entity.Property(e => e.ReleaseDate)
//                    .IsRequired()
//                    .HasColumnName("release_date")
//                    .HasMaxLength(50);
//            });

//            modelBuilder.Entity<Movies>(entity =>
//            {
//                entity.Property(e => e.Id).ValueGeneratedNever();

//                entity.Property(e => e.Counter).HasColumnName("counter");

//                entity.Property(e => e.Link)
//                    .IsRequired()
//                    .HasColumnName("link")
//                    .HasMaxLength(500);

//                entity.Property(e => e.LinkToTreiler)
//                    .IsRequired()
//                    .HasColumnName("link_to_treiler")
//                    .HasMaxLength(500);

//                entity.Property(e => e.Photo)
//                    .IsRequired()
//                    .HasColumnName("photo")
//                    .HasMaxLength(500);

//                entity.Property(e => e.TheName)
//                    .IsRequired()
//                    .HasColumnName("the_name")
//                    .HasMaxLength(50);
//            });
//        }
//    }
//}
