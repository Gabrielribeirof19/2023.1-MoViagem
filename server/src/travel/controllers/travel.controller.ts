import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { EnableAuth } from "src/auth/decorators/auth.decorator";
import { User } from "src/auth/decorators/user.decorator";
import { UserInfoDTO } from "src/auth/dto/token.dto";
import { CreateTravelRequestDTO } from "../dto/travel.dto";
import { TravelService } from "../services/travel.service";

@Controller("/api/travel")
@ApiTags("travel")
@EnableAuth()
export class TravelController {
  constructor(private travelService: TravelService) {}

  @Post()
  async create(
    @User() loggedInUser: UserInfoDTO,
    @Body() createTravelRequestDTO: CreateTravelRequestDTO
  ): Promise<void> {
    return this.travelService.create(loggedInUser.id, createTravelRequestDTO);
  }
}
