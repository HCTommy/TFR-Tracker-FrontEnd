import { VendorAttribute, Project } from './types';

class dummy {
  attributes: VendorAttribute[] = [
    {
      vendor_id: 1,
      attribute_name: 'Cost Center',
      is_deleted: false,
    },
    {
      vendor_id: 1,
      attribute_name: 'Super Department',
      is_deleted: false,
    },
    {
      vendor_id: 1,
      attribute_name: 'Department',
      is_deleted: false,
    },
    {
      vendor_id: 1,
      attribute_name: 'Division',
      is_deleted: false,
    },
    {
      vendor_id: 1,
      attribute_name: 'ED/MD',
      is_deleted: false,
    },
    {
      vendor_id: 2,
      attribute_name: 'Department',
      is_deleted: false,
    },
    {
      vendor_id: 2,
      attribute_name: 'ED/MD',
      is_deleted: true,
    },
    {
      vendor_id: 3,
      attribute_name: 'Cost Center',
      is_deleted: false,
    },
    {
      vendor_id: 4,
      attribute_name: 'Division',
      is_deleted: false,
    },
    {
      vendor_id: 5,
      attribute_name: 'Department',
      is_deleted: false,
    },
    {
      vendor_id: 5,
      attribute_name: 'ED/MD',
      is_deleted: false,
    },
  ];
}

export class DummyData {
  static readonly dummy = new dummy();
}
