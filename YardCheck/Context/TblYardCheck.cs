//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace YardCheck.Context
{
    using System;
    using System.Collections.Generic;
    
    public partial class TblYardCheck
    {
        public long Id { get; set; }
        public string DriverName { get; set; }
        public string Truck { get; set; }
        public string Problem { get; set; }
        public string Note { get; set; }
        public string DW { get; set; }
        public Nullable<System.DateTime> UnitInDate { get; set; }
        public string UnitInTime { get; set; }
        public Nullable<System.DateTime> ETAFixDate { get; set; }
        public string ETATime { get; set; }
        public Nullable<System.DateTime> NeedDate { get; set; }
        public string NeedTime { get; set; }
        public string Location { get; set; }
        public string Ready { get; set; }
        public System.DateTime AddedOn { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
    }
}
