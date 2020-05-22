export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: number;
  date: Date;
}


// o que esperar do response da listagem de usuários
export interface ResponseUsers {
    status: number;
    result: User[];
}

// o que esperar do response da listagem de apenas 1 usuário
export interface ResponseUser {
  status: number;
  result: User[];
}

// o que esperar do response de delete

export interface ResponseDelUser {
status: number;
result: string;
}

// o que esperar do response de post

export interface ResponsePostUser {
status: number;
result: string;
}

// o que esperar do response de put "update"

export interface ResponsePutUser {
  status: number;
  result: string;
  }
