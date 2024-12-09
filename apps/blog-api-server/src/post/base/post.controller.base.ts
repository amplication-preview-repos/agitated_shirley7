/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PostService } from "../post.service";
import { PostCreateInput } from "./PostCreateInput";
import { Post } from "./Post";
import { PostFindManyArgs } from "./PostFindManyArgs";
import { PostWhereUniqueInput } from "./PostWhereUniqueInput";
import { PostUpdateInput } from "./PostUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";

export class PostControllerBase {
  constructor(protected readonly service: PostService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Post })
  async createPost(@common.Body() data: PostCreateInput): Promise<Post> {
    return await this.service.createPost({
      data: {
        ...data,

        author: data.author
          ? {
              connect: data.author,
            }
          : undefined,

        tag: data.tag
          ? {
              connect: data.tag,
            }
          : undefined,
      },
      select: {
        author: {
          select: {
            id: true,
          },
        },

        category: true,
        content: true,
        createdAt: true,
        id: true,
        published: true,

        tag: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
        views: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Post] })
  @ApiNestedQuery(PostFindManyArgs)
  async posts(@common.Req() request: Request): Promise<Post[]> {
    const args = plainToClass(PostFindManyArgs, request.query);
    return this.service.posts({
      ...args,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        category: true,
        content: true,
        createdAt: true,
        id: true,
        published: true,

        tag: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
        views: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async post(
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Post | null> {
    const result = await this.service.post({
      where: params,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        category: true,
        content: true,
        createdAt: true,
        id: true,
        published: true,

        tag: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
        views: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePost(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() data: PostUpdateInput
  ): Promise<Post | null> {
    try {
      return await this.service.updatePost({
        where: params,
        data: {
          ...data,

          author: data.author
            ? {
                connect: data.author,
              }
            : undefined,

          tag: data.tag
            ? {
                connect: data.tag,
              }
            : undefined,
        },
        select: {
          author: {
            select: {
              id: true,
            },
          },

          category: true,
          content: true,
          createdAt: true,
          id: true,
          published: true,

          tag: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
          views: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePost(
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Post | null> {
    try {
      return await this.service.deletePost({
        where: params,
        select: {
          author: {
            select: {
              id: true,
            },
          },

          category: true,
          content: true,
          createdAt: true,
          id: true,
          published: true,

          tag: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
          views: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  async findComments(
    @common.Req() request: Request,
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,

        post: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comments")
  async connectComments(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updatePost({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  async updateComments(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updatePost({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  async disconnectComments(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updatePost({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/:id/category")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async AddCategoryToPost(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.AddCategoryToPost(body);
  }

  @common.Get("/:id/get-posts-by-category")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetPostsByCategory(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.GetPostsByCategory(body);
  }

  @common.Get("/posts/top-views")
  @swagger.ApiOkResponse({
    type: PostFindManyArgs,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetTopPostsByViews(
    @common.Body()
    body: string
  ): Promise<PostFindManyArgs[]> {
    return this.service.GetTopPostsByViews(body);
  }

  @common.Post("/:id/increment-views")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async IncrementPostViews(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.IncrementPostViews(body);
  }
}
