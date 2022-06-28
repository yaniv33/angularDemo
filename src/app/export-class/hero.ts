export class Hero {
  id!: number;
  name!: string;
}

export class System {
  light_Bitmask!: number;
  system_ID!: number;
  override!: number;
  entry_Time!: number;
  localIP!: string;
}

export class Eventy {
  duration!: number;
  start_Time!: number;
  game_ID!: number;
  light_Bitmask!: number;
  system_ID!: number;
  active!: boolean;
}

