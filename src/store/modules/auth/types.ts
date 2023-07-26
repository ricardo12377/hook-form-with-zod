export interface CreateUserDto {
  name: string;
  last_name: string;
  login: string;
  password: string;
  team_id: string;
}

export interface Team {
  id: string;
  team_name: string;
}

export interface GetTeams {
  error: string | undefined;
  status: string;
  teams: Team[];
}

export interface RegisterUser {
  status: string;
  error: string | undefined;
}

export interface LoginState {
  isLogged: boolean;
  error: string | undefined;
  status: string;
  message: string | undefined;
  userName: string;
  getTeams: GetTeams;
}
