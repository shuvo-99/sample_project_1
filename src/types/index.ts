export interface DragonResponse {
  id: string;
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  first_flight: string;
}

export interface RocketResponse {
  id: number;
  active: false;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
}

export interface MissionResponse {
  mission_name: string;
  mission_id: string;
  wikipedia: string;
  website: string;
  twitter: string;
  description: string;
}
