using System.Data.Entity;

namespace YardCheck.Context
{
    public class YardCheckContext: DbContext
    {
        public YardCheckContext(): base("yardcheck_connection")
        {
            //this.Configuration.LazyLoadingEnabled = false;
        }
        public virtual DbSet<YardCheck.Models.YardCheck> TblYardChecks { get; set; }
    }
}