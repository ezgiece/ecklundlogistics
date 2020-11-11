using System;
using System.Collections.Generic;
using System.Linq;
using YardCheck.Context;

namespace YardCheck.Repository
{
    public class YardCheckRepository
    {
        private YardCheckEntities _context;

        public YardCheckRepository()
        {
            _context = new YardCheckEntities();
        }

        public IEnumerable<TblYardCheck> YardCheckList()
        {
            try
            {
                var records = _context.TblYardChecks.ToList();
                return records;
            }
            catch (Exception x)
            {
                throw new Exception(x.Message);
            }
        }

        public TblYardCheck YardCheckGetRecordById(int id)
        {
            try
            {
                var record = _context.TblYardChecks.SingleOrDefault(s=>s.Id == id);
                return record;
            }
            catch (Exception x)
            {
                throw new Exception(x.Message);
            }
        }
        public TblYardCheck Update(TblYardCheck request)
        {
            try
            {
                _context.TblYardChecks.Attach(request);
                _context.Entry(request).State = System.Data.Entity.EntityState.Modified;
                _context.SaveChanges();
                return request;
            }
            catch (Exception x)
            {
                throw new Exception(x.Message);
            }
        }

        public TblYardCheck Create(TblYardCheck request)
        {
            try
            {
                _context.TblYardChecks.Add(request);
                _context.SaveChanges();

                return request;
            }
            catch (Exception x)
            {
                throw new Exception(x.Message);
            }
        }

        public object Delete(int id)
        {
            try
            {
                var record = _context.TblYardChecks.SingleOrDefault(s => s.Id == id);
                if (record != null)
                {
                    _context.TblYardChecks.Remove(record);
                    _context.SaveChanges();

                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception x)
            {
                throw new Exception(x.Message);
            }
        }

    }
}