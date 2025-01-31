export default function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Үйлчилгээний журам</h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Ерөнхий зүйл</h2>
          <p className="mb-4">
            Энэхүү үйлчилгээний журам нь манай компанийн үзүүлж буй ачаа тээврийн үйлчилгээтэй холбоотой харилцааг зохицуулна.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Үйлчилгээний хамрах хүрээ</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Олон улсын ачаа тээвэр</li>
            <li>Хаяг хүртэл хүргэх үйлчилгээ</li>
            <li>Баглаа боодлын үйлчилгээ</li>
            <li>Ачааны даатгал</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Талуудын эрх, үүрэг</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Үйлчилгээ үзүүлэгчийн үүрэг:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ачааг цаг хугацаанд нь хүргэх</li>
              <li>Ачааны бүрэн бүтэн байдлыг хангах</li>
              <li>Мэдээллийн нууцлалыг хадгалах</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Үйлчлүүлэгчийн үүрэг:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Үнэн зөв мэдээлэл өгөх</li>
              <li>Төлбөр тооцоог цаг хугацаанд нь хийх</li>
              <li>Хориглосон бараа бүтээгдэхүүн илгээхгүй байх</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Хариуцлага</h2>
          <p className="mb-4">
            Талууд энэхүү журмын дагуу хүлээсэн үүргээ биелүүлээгүй тохиолдолд Монгол Улсын хууль тогтоомжийн дагуу хариуцлага хүлээнэ.
          </p>
        </section>
      </div>
    </div>
  );
}