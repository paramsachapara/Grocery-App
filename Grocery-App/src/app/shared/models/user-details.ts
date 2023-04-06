export interface UserDetails {
  status: number,
    success: boolean,
    message: string,
    data: {
        first_name: string,
        last_name: string,
        primary_email: string
    },
    addresses:any[]
}
