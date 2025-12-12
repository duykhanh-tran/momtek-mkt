import { PayloadRichText } from "@/types/payload-types";
import React, { Fragment } from "react";

interface RichTextRendererProps {
  content: PayloadRichText;
}

interface SerializerProps {
  // Sửa 'nodes' type để nhận cả children của root và children của paragraph
  nodes: (
    | PayloadRichText['root']['children'][0]
    | PayloadRichText['root']['children'][0]['children'][0]
  )[];
}

function Serialize({ nodes }: SerializerProps) {
  return (
    <Fragment>
      {nodes?.map((node, i) => {
        
        // Kiểm tra xem node có phải là 'paragraph' không
        if ('children' in node && node.type === 'paragraph') {
          return (
            <p key={i} className="mb-2 last:mb-0">
              {/* @ts-ignore - Bỏ qua lỗi type phức tạp ở đây */}
              <Serialize nodes={node.children} />
            </p>
          );
        }
        // Kiểm tra xem node có phải là 'text' không
        if ('text' in node && node.type === 'text') {
          let text: React.ReactNode = node.text;
          
          // SỬA LỖI 2: Dùng JSX (<strong>) thay vì string ('<strong>')
          if (node.format) {
            if (node.format & 1) text = <strong>{text}</strong>;
            if (node.format & 2) text = <em>{text}</em>;
            if (node.format & 8) text = <code>{text}</code>;
          }
          return text;
        }
        return null;
      })}
    </Fragment>
  );
}

function RichTextRenderer({ content }: RichTextRendererProps) {
  // Chỉ kiểm tra những điều cơ bản nhất.
  if (!content || !content.root || !content.root.children || content.root.children.length === 0) {
    return null;
  }
  
  return <Serialize nodes={content.root.children} />;
}

export default RichTextRenderer;