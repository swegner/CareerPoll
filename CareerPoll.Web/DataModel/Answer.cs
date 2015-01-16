namespace CareerPoll.Web.DataModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Answer")]
    public partial class Answer
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int ResponseId { get; set; }

        public int QuestionId { get; set; }

        public double Value { get; set; }

        public string Notes { get; set; }
    }
}
