/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function Page(params: { params: { productID: string } }) {
  const [mainImage, setMainImage] = useState("/400x400.svg");

  const productImages = [
    "/100x100.svg",
    "/100x100.svg",
    "/100x100.svg",
    "/100x100.svg",
    "/100x100.svg",
    "/100x100.svg",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Image
            src={mainImage}
            alt="Main product image"
            className="w-full h-auto rounded-lg"
            width={400}
            height={400}
          />
          <div className="flex space-x-2">
            {productImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Product thumbnail ${index + 1}`}
                className="w-20 h-20 rounded-md cursor-pointer"
                onClick={() => setMainImage(img)}
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Ergonomic Office Chair</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(128 reviews)</span>
          </div>
          <p className="text-xl font-bold">$299.99</p>
          <p className="text-muted-foreground">
            Experience ultimate comfort with our ergonomic office chair.
            Designed to support your body during long work hours, this chair
            features adjustable lumbar support, breathable mesh back, and
            customizable armrests.
          </p>
          <div className="space-y-4">
            <div>
              <Label htmlFor="color">Color</Label>
              <RadioGroup
                id="color"
                defaultValue="black"
                className="flex space-x-2 mt-2"
              >
                <Label
                  htmlFor="color-black"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="color-black" value="black" />
                  Black
                </Label>
                <Label
                  htmlFor="color-gray"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="color-gray" value="gray" />
                  Gray
                </Label>
                <Label
                  htmlFor="color-white"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="color-white" value="white" />
                  White
                </Label>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Select defaultValue="1">
                <SelectTrigger className="w-24 mt-2">
                  <SelectValue placeholder="Quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Card className="mt-8">
        <CardContent className="p-0">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start rounded-none border-b">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-4">
              <p>
                Our Ergonomic Office Chair is designed to provide maximum
                comfort and support during long work hours. The chair features a
                breathable mesh back that promotes air circulation, keeping you
                cool throughout the day. The adjustable lumbar support ensures
                proper spinal alignment, reducing the risk of back pain and
                discomfort.
              </p>
              <p className="mt-4">Key features include:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Adjustable height and tilt</li>
                <li>360-degree swivel</li>
                <li>Padded armrests</li>
                <li>Durable nylon base with smooth-rolling casters</li>
                <li>Weight capacity: 300 lbs</li>
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="p-4">
              <ul className="space-y-2">
                <li>
                  <strong>Dimensions:</strong> 26"W x 26"D x 38-42"H
                </li>
                <li>
                  <strong>Weight:</strong> 35 lbs
                </li>
                <li>
                  <strong>Material:</strong> Mesh back, fabric seat, nylon base
                </li>
                <li>
                  <strong>Color options:</strong> Black, Gray, White
                </li>
                <li>
                  <strong>Assembly required:</strong> Yes
                </li>
                <li>
                  <strong>Warranty:</strong> 5-year limited warranty
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="p-4">
              <p className="text-muted-foreground">
                Customer reviews will be displayed here.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
