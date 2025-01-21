import { Button } from '@/components/ui/button';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const ColorExplanationDialog = (props: { children: React.ReactNode }) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="subtle" size="sm">
          Tags&#39; Colors Explanation
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tags&#39; Colors Explanation</DialogTitle>
        </DialogHeader>
        <DialogBody>{props.children}</DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default ColorExplanationDialog;
