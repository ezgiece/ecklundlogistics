using System.Collections.Generic;

namespace YardCheck.Enum
{
    public enum DWEnum
    {
        Yes,
        No
    }
    public static class Locations
    {
        public static IEnumerable<string> Location => new List<string>
            {
              "Possible Broke Down","Outside Repair Shop","Yard"
            };
    }
}