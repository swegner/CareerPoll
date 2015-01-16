using System.Data.Entity;

namespace CareerPoll.Web.DataModel
{
    public class CareerPollDataModel : DbContext
    {
        public CareerPollDataModel()
            : base("name=CareerPollDataModel")
        {
        }

        public virtual DbSet<Answer> Answers { get; set; }
        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<Response> Responses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answer>()
                .Property(e => e.Notes)
                .IsUnicode(false);

            modelBuilder.Entity<Question>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Question>()
                .Property(e => e.Description)
                .IsUnicode(false);
        }
    }
}
