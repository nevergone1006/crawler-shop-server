import xlsx from 'node-xlsx';
import moment from 'moment-timezone';

export const exportFilesFunc = (app) => {
  return (req, res) => {
    const shopSevice = app.service('shops');
    shopSevice.find({
      query: {
        $limit: 100000,
        $sort: { 'createdAt': -1 },
      }
    })
      .then(shopData => {
        const buffer = _formatData(shopData);
        res.attachment('thitruongsy-shops.xlsx');
        res.send(buffer);
      })
      .catch((error) => {
        console.log('error: ', error);
        throw new Error (error);
      });
  };
};

const _formatData = (shopData) => {
  // const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
  const options = {'!cols': [
    { wch: 5 },
    { wch: 30 },
    { wch: 40 },
    { wch: 80 },
    { wch: 80 },
    { wch: 30 },
    { wch: 80 },
    { wch: 30 },
    { wch: 30 },
    { wch: 20 },
    { wch: 80 },
    { wch: 50 },
    { wch: 80 },
    { wch: 20 },
    { wch: 30 },
    { wch: 50 },
    { wch: 30 },
    { wch: 30 },
    { wch: 30 },
    { wch: 30 },
    { wch: 30 },
    { wch: 50 },
  ]};

  const header = [
    // 'id',
    'TT',
    'Nguồn',
    'Shop Id',
    'Url',
    'Name',
    'Type',
    'Địa chỉ',
    'Số điện thoại',
    'Email',
    'Ngày Shop hoạt động',
    'Danh mục',
    'Mô hình doanh nghiệp',
    'Tên doanh nghiệp',
    'Ngày doanh nghiệp hoạt động',
    'Mã số thuế',
    'Tên người đại diện',
    'Số điện thoại người đại diện',
    'Thị trường',
    'Ngành hàng',
    'Nhân sự',
    'Sản lượng',
    'Thời gian crawle'
  ];
  const data = [header];
  shopData.data.map((item, index) => data.push([
    index + 1,
    // item._id,
    item.channel,
    item.shopId,
    item.shopUrl,
    item.shopName,
    item.shopType,
    item.shopAddress,
    item.shopPhone,
    item.shopEmail,
    moment(item.shopStarted).format('DD-MM-YYYY'),
    item.categories,
    item.enterpriseType,
    item.enterpriseName,
    item.enterpriseStarted,
    item.enterprisePit,
    item.nameRepresent,
    item.phoneRepresent,
    item.enterpriseMarket,
    item.enterpriseCategory,
    item.enterpriseSize,
    item.enterpriseTotal,
    moment(item.createdAt).format('HH:mm:ss DD-MM-YYYY'),
  ]));

  const buffer = xlsx.build([{ name: 'thitruongsy-shops', data }], options);
  return buffer;
};

