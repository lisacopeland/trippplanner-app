import { deepCopy } from '../common/utils'

export const TRIP_STATUS_NEW = 'new';
export const TRIP_STATUS_ARCHIVED = 'archived';
export const TRIP_STATUS_HASDATA = 'hasdata';

export class Trip {
  id: string;
  updated_at: string;
  created_at: string;
  account_id: string;
  admin_title: string;
  admin_status: string;
  admin_notes: string;
  background_pic_url: string;
  start_date: string;
  end_date: string;
  participants: string[]; // Emails of participants
  totalTripCost: number;

  constructor(defaultValues: Partial<Trip>) {
      Object.keys(defaultValues).forEach((key) => {
        this[key] = defaultValues[key];
      });
  }

  clone() {
    return new Trip(deepCopy(this));
  }
}

export function mapToTrip(data: any): Trip {
  return new Trip(data);
}
export function mapToTrips(data: any[]): Trip[] {
  console.log('data: ', data);
  if (data.length) {
    const allData = data.map(mapToTrip);
    return allData;
  } else {
    return [];
  }
}
