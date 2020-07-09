import PS2Event from './PS2Event';
import { PlayerFacilityDefend as PlayerFacilityDefendData } from '../utils/PS2Events';

export default class PlayerFacilityDefend extends PS2Event implements PlayerFacilityDefendData {
    public readonly character_id: string;
    public readonly event_name: 'PlayerFacilityDefend';
    public readonly facility_id: string;
    public readonly outfit_id: string;
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `PlayerFacilityDefend:${this.character_id}:${this.timestamp}`;
    }
}