import { ProfileInterface } from './profile.interface';
import { UserInterface } from './user.interface';
import { AddressInterface } from './address.interface';

export interface MemberInterface {
    id: string, // Member collection id
    uid: string, // Firebase auth user id
    user: UserInterface,
    profile: ProfileInterface,
    address: AddressInterface,
    verified: boolean,
}
