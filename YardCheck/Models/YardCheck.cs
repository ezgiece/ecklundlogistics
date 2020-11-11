using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YardCheck.Models
{
    [Table("TblYardCheck")]
    public class YardCheck
    {
        [Key]
        public int Id { get; set; }
        public string DriverName { get; set; }
        public string Truck { get; set; }
        public string Problem { get; set; }
        public string Note { get; set; }
        public string DW { get; set; }
        [DisplayFormat(DataFormatString = "{0:d}")]
        public DateTime UnitinDate { get; set; }
        public string UnitinTime { get; set; }
        [DisplayFormat(DataFormatString = "{0:d}")]
        public DateTime ETAFixDate { get; set; }
        public string ETATime { get; set; }
        [DisplayFormat(DataFormatString = "{0:d}")]
        public DateTime NeedDate { get; set; }
        public string NeedTime { get; set; }
        public string Ready { get; set; }
        public string Location { get; set; }
        [DisplayFormat(DataFormatString = "{0:d}")]
        public DateTime AddedOn { get; set; }
        [DisplayFormat(DataFormatString = "{0:d}")]
        public DateTime ModifiedOn { get; set; }
    }
}