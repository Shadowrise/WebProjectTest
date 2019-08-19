using System;
using System.ComponentModel.DataAnnotations;

namespace WebUI3.Model
{
    public class Bug
    {
        [Key]
        public int BugId { get; set; }
        public string Description { get; set; }
        public int TypeId { get; set; }
        public int StatusId { get; set; }
        public int AreaId { get; set; }
        public int UserId { get; set; }
        public DateTime DateCreation { get; set; }
    }
}