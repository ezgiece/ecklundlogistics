using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Web.Mvc.Html;
using YardCheck.Context;
using YardCheck.Enum;
using YardCheck.Repository;

namespace YardCheck.Controllers
{
    public class HomeController : Controller
    {
        private YardCheckRepository _repository;
        public HomeController()
        {
            _repository = new YardCheckRepository();
        }
        public ActionResult Index()
        {

            return View();
        }
        public JsonResult GetYardCheckList()
        {
            var results = _repository.YardCheckList();
            return Json(results, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult SaveYardCheck(string yardCheck, int opr)
        {
            var obj = JsonConvert.DeserializeObject<TblYardCheck>(yardCheck);
            var response = new TblYardCheck();
            if (opr == 1)
            {
                obj.AddedOn = DateTime.Now;
                obj.ModifiedOn = DateTime.Now;
                response = _repository.Update(obj);
            }
            else
            {
                obj.AddedOn = DateTime.Now;
                obj.ModifiedOn = DateTime.Now;
                response = _repository.Create(obj);
            }


            return Json(response);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var result = _repository.Delete(id);

            return Json(result);
        }
        [HttpGet]
        public JsonResult GetDW()
        {
            var list = EnumHelper.GetSelectList(typeof(DWEnum))
                .Select(x => new NumericValueSelectListItem()
                {
                    Text = x.Text,
                    Value = int.Parse(x.Value)
                });

            return Json(list, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetMilitryTime()
        {
            var list = MilitryTime.UnitInTime;
          
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetLocation()
        {
            var list = Locations.Location;

            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public class NumericValueSelectListItem
        {
            public string Text { get; set; }
            public int Value { get; set; }
        }
        public ActionResult Add()
        {
            ViewBag.Message = "Your application description page.";
            var model = new TblYardCheck();
            return View(model);
        }

        public ActionResult Edit(int id)
        {
            var record = _repository.YardCheckGetRecordById(id);

            return View(record);
        }

        [HttpPost]
        public ActionResult PutSave(TblYardCheck request)
        {
            request.ModifiedOn = DateTime.Now;
            request.AddedOn = DateTime.Now;
            var response = _repository.Update(request);
            return RedirectToAction("Index");

        }

        [HttpPost]
        public ActionResult PostSave(TblYardCheck request)
        {
            request.AddedOn = DateTime.Now;
            request.ModifiedOn = DateTime.Now;
            var response = _repository.Create(request);
            return RedirectToAction("Index");


        }

    }
}